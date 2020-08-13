import {Pipe, PipeTransform} from "@angular/core"
@Pipe({
    name: 'toPercent'
})
export class PercentPipe implements PipeTransform{
    transform(value: number){
        return Math.round((value * 100) / 176);
    }
}