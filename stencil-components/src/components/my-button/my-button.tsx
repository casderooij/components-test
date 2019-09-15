import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @State() numOfClicks: number = 0;

  @Event() buttonClicked: EventEmitter;

  handleEmitter = () => {
    this.numOfClicks++;
    this.buttonClicked.emit({
      event,
      name: 'button clicked',
      value: this.numOfClicks,
    });
  };

  render() {
    return <button onClick={() => this.handleEmitter()}>Test</button>;
  }
}
