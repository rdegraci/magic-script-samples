import { makeButton } from './button.js';

export default async function start (app) {
  let prism = app.requestNewPrism([0.7, 0.5, 0.5]);
  let button = null;
  // Add button # 1
  button = makeButton(prism, 'UIButtonStream');
  button.setLocalPosition([0, 0.15, 0]);
  prism.getRootNode().addChild(button);
  // Add button # 2
  button = makeButton(prism, 'UIButtonHeartPlus');
  button.setLocalPosition([0, 0, 0]);
  prism.getRootNode().addChild(button);
  // Add button # 3
  button = makeButton(prism, 'UIButtonBlock');
  button.setLocalPosition([0, -0.15, 0]);
  prism.getRootNode().addChild(button);
  return prism;
}
