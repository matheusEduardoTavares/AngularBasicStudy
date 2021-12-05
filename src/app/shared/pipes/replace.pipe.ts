import { Pipe, PipeTransform } from "@angular/core";

///O name é o que é colocado após o |
@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, char: string, valueToReplace: string): string {
    return value.replace(char, valueToReplace);
  }

}
