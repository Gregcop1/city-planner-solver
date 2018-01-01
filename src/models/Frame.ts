export class Frame {
  public value: number = 0;

  constructor(
    public x: number = 0,
    public y: number = 0,
    public forbidden: boolean = false,
  ) {}
}
