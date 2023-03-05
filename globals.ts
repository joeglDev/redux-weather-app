class GLOBALS {
  private LOCALHOST: string;
  private GITHUB: string;

  public constructor(LOCALHOST: string, GITHUB: string) {
    this.LOCALHOST = LOCALHOST;
    this.GITHUB = GITHUB;
  }

  public getLOCALHOST(): string {
    return this.LOCALHOST;
  }

  public getGITHUB(): string {
    return this.GITHUB;
  }
}

export const Globals = new GLOBALS("http://localhost:3000/", "https://github.com/joeglDev");////
