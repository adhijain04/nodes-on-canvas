const draw = ({ nodes, context, dragTarget }) => {
  for (let i = 0; i < nodes.length; i++) {
    drawFillRect({
      context,
      color: dragTarget && dragTarget.name === nodes[i].name ? "blue" : "white",
      info: nodes[i].info,
      name: nodes[i].name
    });
  }
};

const drawSubRect = (context, info) => {
  // console.log(info, info.sub.right);

  context.beginPath();
  if (info.sub.right && info.sub.right.length) {
    for (let i = 0; i < info.sub.right.length; i++) {
      if (i === 0) {
        context.rect(info.sub.right[i].x + info.w - info.sub.right[i].w, info.sub.right[i].y + (info.h / 2 - 10), info.sub.right[i].w, info.sub.right[i].h);
      } else {
        context.rect(info.sub.right[i].x + info.w - info.sub.right[i].w, info.sub.right[i].y + (info.h / 2 + 15), info.sub.right[i].w, info.sub.right[i].h);
      }
    }
  }
  if (info.sub.left) {
    context.rect(info.sub.left.x, info.sub.left.y + (info.h / 2 - 10), info.sub.left.w, info.sub.left.h);
  }
  context.fillStyle = "gray";
  context.shadowColor = 'white';
  context.fill();
}

const drawFillRect = ({ context, name, info, color }) => {
  var cornerRadius = 10;

  // Set faux rounded corners
  context.lineJoin = "round";
  context.lineWidth = cornerRadius;

  // Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
  context.beginPath();
  context.shadowBlur = 10;
  context.shadowOffsetX = 1;
  context.shadowOffsetY = 1;
  context.strokeStyle = color;
  context.shadowColor = 'gray';
  context.font = "20px Georgia";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.strokeRect(info.x + (cornerRadius / 2), info.y + (cornerRadius / 2), info.w - cornerRadius, info.h - cornerRadius);
  context.rect(info.x + (cornerRadius / 2), info.y + (cornerRadius / 2), info.w - cornerRadius, info.h - cornerRadius);
  context.fillStyle = "white";
  context.shadowColor = 'white';
  context.fill();
  drawSubRect(context, info)
  context.fillStyle = "black";
  context.fillText(name, info.x + (info.w / 2), info.y + (info.h / 2));
}

export { draw };

