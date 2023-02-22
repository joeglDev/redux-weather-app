class GLOBALS {
  private LOCALHOST: string;

  public constructor(LOCALHOST: string) {
    this.LOCALHOST = LOCALHOST;
  }

  public getLOCALHOST(): string {
    return this.LOCALHOST;
  }
}

export const Globals = new GLOBALS("http://localhost:3000/");
