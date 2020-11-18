import React, { useRef, useState, useEffect } from 'react';
import Left from './sideBar/Left';
import { draw } from './shapes';
import Right from './sideBar/Right';

function Canvas() {
    // variables
    let isDown = false;
    let dragTarget = null;
    let startX = null;
    let startY = null;
    const zoomBy = 0.01;
    const dragInertia = 40;
    const canvasSize = 2000;
    let translateX = 0, translateY = 0;

    // local state
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [context, setContext] = useState(null);
    const [overflow, setOverflow] = useState("scroll");
    const [{ clientX, clientY }, setClient] = useState({
        clientX: 0,
        clientY: 0
    });
    const [nodes, setNodes] = useState([
        {
            name: "Home",
            info: {
                x: 300,
                y: 300,
                w: 130,
                h: 80,
                sub: {
                    right: [
                        {
                            x: 300,
                            y: 300,
                            w: 20,
                            h: 15
                        }
                    ]
                }
            },
            next: null
        }
    ]);
    const [draggableCanvas, setDraggableCanvas] = useState(true);
    const [selectedNode, setSelectedNode] = useState(null);

    // life-cycle hooks
    useEffect(() => {
        const { innerHeight, innerWidth } = window;

        const scrollDown = (canvasSize - innerHeight) / 2;
        const scrollLeft = (canvasSize - innerWidth) / 2;

        containerRef.current.scroll(scrollLeft, scrollDown);
    }, []);

    useEffect(() => {
        const { current } = canvasRef;
        let scale = window.devicePixelRatio;

        if (current) {
            const renderCtx = current.getContext('2d');

            if (renderCtx) {
                window.devicePixelRatio = 1;
                current.style.width = canvasSize + "px";
                current.style.height = canvasSize + "px";

                current.width = Math.floor(canvasSize * scale);
                current.height = Math.floor(canvasSize * scale);

                // configuring scaling for shapes.
                renderCtx.scale(scale, scale);
                renderCtx.font = '10px Arial';
                renderCtx.textAlign = 'center';
                renderCtx.textBaseline = 'middle';

                setContext(renderCtx);
            }
        }
    }, [context]);

    useEffect(() => {
        if (context) {
            context.clearRect(0, 0, context.clientWidth, context.clientHeight);

            draw({
                nodes,
                context,
                dragTarget
            });
        }
    }, [nodes, context, dragTarget]);

    // functions
    const renderNodeHandler = (name) => {
        let node;
        let allNodes = [...nodes];

        if (name === "API") {
            node = {
                name,
                info: {
                    x: 300,
                    y: 300,
                    w: 130,
                    h: 80,
                    sub: {
                        right: [
                            {
                                name: "fail",
                                x: 300,
                                y: 300,
                                w: 20,
                                h: 15
                            },
                            {
                                name: "success",
                                x: 300,
                                y: 300,
                                w: 20,
                                h: 15
                            }
                        ]
                        ,
                        left: {
                            x: 300,
                            y: 300,
                            w: 20,
                            h: 15
                        }
                    }
                },
                previous: null,
                success: null,
                fail: null
            }
        } else if (name === "Choice") {
            node = {
                name,
                info: {
                    x: 300,
                    y: 300,
                    w: 130,
                    h: 80,
                    sub: {
                        right: [
                            {
                                name: "if",
                                x: 300,
                                y: 300,
                                w: 20,
                                h: 15
                            },
                            {
                                name: "else",
                                x: 300,
                                y: 300,
                                w: 20,
                                h: 15
                            }
                        ],
                        left: {
                            x: 300,
                            y: 300,
                            w: 20,
                            h: 15
                        }
                    }
                },
                previous: null,
                else: null,
                if: null
            }
        } else if (name === "HangUp" || name === "Transfer") {
            node = {
                name,
                info: {
                    x: 300,
                    y: 300,
                    w: 130,
                    h: 80,
                    sub: {
                        left: {
                            x: 300,
                            y: 300,
                            w: 20,
                            h: 15
                        }
                    }
                },
                previous: null,
            }
        } else {
            node = {
                name,
                info: {
                    x: 300,
                    y: 300,
                    w: 130,
                    h: 80,
                    sub: {
                        right: [
                            {
                                x: 300,
                                y: 300,
                                w: 20,
                                h: 15
                            }
                        ],
                        left: {
                            x: 300,
                            y: 300,
                            w: 20,
                            h: 15
                        }
                    }
                },
                previous: null,
                next: null
            }
        }

        allNodes.push(node);
        setNodes(allNodes);
    }

    const onDragStartHandler = (e) => {
        const preview = document.createElement("div");
        preview.style.display = "none";
        e.dataTransfer.setDragImage(preview, 0, 0);

        setClient({ clientX: e.clientX, clientY: e.clientY });
    }

    const onDragHandler = (e) => {
        if (e.clientX && e.clientY) {
            const deltaX = (clientX - e.clientX) / dragInertia;
            const deltaY = (clientY - e.clientY) / dragInertia;

            containerRef.current.scrollBy(deltaX, deltaY);
        }
    }

    const onWheelHandler = (e) => {
        if (e.deltaY > 0) {
            if (scale === 1) {
                setOverflow("hidden");
            }
            if (scale > 1) {
                setScale(scale - zoomBy);
            }
        } else {
            setScale(scale + zoomBy);
        }
    }

    // const drawConnector = (from, to) => {
    //     context.strokeStyle = "orange";
    //     context.lineWidth = 3;
    //     context.beginPath();
    //     context.moveTo(from.x, from.y);
    //     context.bezierCurveTo(120, 160, 180, 10, to.x, to.y);
    //     context.stroke();
    // }

    const hitNode = (x, y) => {
        let isTarget = null;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (x >= node.info.x && x <= node.info.x + node.info.w && y >= node.info.y && y <= node.info.y + node.info.h) {
                dragTarget = node;
                isTarget = true;
                setSelectedNode(node);
                setDraggableCanvas(false);

                break;

                // -------------------
                // commented code for getting the connector rectangle
                // -------------------

                // if (node.info && node.info.sub) {
                //     if (node.info.sub.right && node.info.sub.right.length) {
                //         for (let j = 0; j < node.info.sub.right.length; j++) {
                //             if (j === 0) {
                //                 if (x >= node.info.sub.right[j].x + node.info.w - node.info.sub.right[j].w && x <= node.info.sub.right[j].x + node.info.w - node.info.sub.right[j].w + node.info.sub.right[j].w && y >= node.info.sub.right[j].y + (node.info.h / 2 - 10) && y <= node.info.sub.right[j].y + (node.info.h / 2 - 10) + node.info.sub.right[j].h) {
                //                     dragTarget = null;
                //                     isTarget = true

                //                     node.info.sub.right[j].x = x
                //                     node.info.sub.right[j].y = y

                //                     setDraggableCanvas(false);

                //                     // break;
                //                 }
                //             } else {
                //                 if (x >= node.info.sub.right[j].x + node.info.w - node.info.sub.right[j].w && x <= node.info.sub.right[j].x + node.info.w - node.info.sub.right[j].w + node.info.sub.right[j].w && y >= node.info.sub.right[j].y + (node.info.h / 2 + 15) && y <= node.info.sub.right[j].y + (node.info.h / 2 + 15) + node.info.sub.right[j].h) {
                //                     dragTarget = null;
                //                     isTarget = true

                //                     node.info.sub.right[j].x = x
                //                     node.info.sub.right[j].y = y

                //                     setDraggableCanvas(false);

                //                     // break;
                //                 }
                //             }
                //         }
                //     }
                // }

                // -------------------
                // commented code for getting the connector rectangle
                // -------------------
            } else {
                setDraggableCanvas(true)
            }
        }

        draw({
            nodes,
            context,
            dragTarget,
        });


        return isTarget;

    }

    const handleMouseDown = e => {
        startX = parseInt(e.nativeEvent.offsetX - context.canvas.clientLeft);
        startY = parseInt(e.nativeEvent.offsetY - context.canvas.clientTop);
        isDown = hitNode(startX, startY);
    }

    const handleMouseMove = e => {
        if (!isDown) return;

        const mouseX = parseInt(e.nativeEvent.offsetX - context.canvas.clientLeft);
        const mouseY = parseInt(e.nativeEvent.offsetY - context.canvas.clientTop);

        const dx = mouseX - startX;
        const dy = mouseY - startY;

        startX = mouseX;
        startY = mouseY;

        if (dragTarget) {
            dragTarget.info.x += dx;
            dragTarget.info.y += dy;
            // left
            if (dragTarget.info.sub.left) {
                dragTarget.info.sub.left.x += dx;
                dragTarget.info.sub.left.y += dy;
            }
            // right
            if (dragTarget.info.sub.right && dragTarget.info.sub.right.length) {
                for (let i = 0; i < dragTarget.info.sub.right.length; i++) {
                    dragTarget.info.sub.right[i].x += dx;
                    dragTarget.info.sub.right[i].y += dy;
                }
            }

            context.clearRect(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);

            draw({
                nodes,
                context,
                dragTarget
            });
        }

        // -------------------
        // commented code for updating the coordinates of the starting connector
        // -------------------

        // for (let i = 0; i < nodes.length; i++) {
        //     let node = nodes[i];

        //     if (node.info && node.info.sub && node.info.sub.right && node.info.sub.right.length) {
        //         for (let j = 0; j < node.info.sub.right.length; j++) {
        //             let subNode = node.info.sub.right[i];

        //             context.strokeStyle = "orange";
        //             context.lineWidth = 3;
        //             context.beginPath();
        //             context.moveTo(subNode.x, subNode.y);
        //             context.bezierCurveTo(120, 160, 180, 10, mouseX, mouseY);
        //             context.stroke();
        //         }
        //     }
        // }

        // -------------------
        // commented code for updating the coordinates of the starting connector
        // -------------------

    }

    const handleMouseUp = e => {
        dragTarget = null;
        isDown = false;

        draw({
            nodes,
            context,
            dragTarget
        });

    }

    const handleMouseOut = e => {
        handleMouseUp(e);
    }

    return (
        <div className='canvas-wrapper'>
            <Left
                renderNodeHandler={renderNodeHandler}
            />
            <div
                className='canvas-container'
                ref={containerRef}
            >
                <canvas
                    draggable={draggableCanvas}
                    ref={canvasRef}
                    className='canvas'
                    style={{
                        overflow,
                        transformOrigin: "0 0",
                        transform: `scale(${scale}, ${scale}) translate(${translateX}px, ${translateY}px)`,
                    }}
                    // node methods
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseOut={handleMouseOut}
                    // canvas methods
                    onDrag={onDragHandler}
                    onWheel={onWheelHandler}
                    onDragStart={onDragStartHandler}
                />
                {selectedNode && <Right selectedNode={selectedNode} />}
            </div>
        </div>
    );
}

export default Canvas
