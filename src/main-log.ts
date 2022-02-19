import * as fs from 'fs';
export class MainLog {
  private static author: string = 'KOMAL DUDHBADE';
  private static desc: string = 'Test Project';
  private static today: Date = new Date();
  private static printLogHeader(): void {
    console.log(`\n\n`);
    console.log(`${this.today}`);
    console.log(`\n`);
    console.log("********************************************************");
    console.log("************** Welcome in typescript project ***********");
    console.log("********************************************************");
  }
  private static printLogData(): void {
    console.log(`*         Author: ${this.author}                       *`);
    console.log(`*         Desc: ${this.desc}                           *`);
    console.log("*                                                      *");
    console.log("*                                                      *");
    console.log("*                                                      *");
    console.log("*                                                      *");
    console.log("*                                                      *");
    console.log("*                                                      *");
    console.log("*                                                      *");
  }

  private static printLogFooter(): void {
    console.log("********************************************************");
  }

  public static printMainLog(): void {
    this.printLogHeader();
    this.printLogData();
    this.printLogFooter();
  }

  public static printVariable(variableName: string, variableValue: string | number| Object): void{
    console.log(`--------------------------------------------------`);
    console.log(`[${variableName}] =>`, variableValue);
    console.log(`---------------------------------------------------`);
    let logText: string = `\n--------------------------------------------------`;
    logText += `[${variableName}] =>`, variableValue;
    logText += `\n---------------------------------------------------`;
  }
  
  public appendLog(logText: string){
    fs.appendFile('output.txt', logText + '\n', function (err) {
      if (err) throw err;
    });
  }

}

