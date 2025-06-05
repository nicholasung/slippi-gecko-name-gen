import { alphabet, hiragana, katakana, numbers, romanji, symbols } from "@/objects/nametagData";
export class stringProcessor {

    constructor(){}

    public toGecko(input: string): string {
        let result = ""
        for(const char of input){
            result += this.findChar(char);
        }
        return result;
    }

    private findChar(char: string): string {
        if(char.length > 1){
            return "00";
        }
        for(const entry of alphabet){
            if(char == entry.character){
                return entry.value;
            }
        }
        for(const entry of numbers){
            if(char == entry.character){
                return entry.value;
            }
        }
        for(const entry of symbols){
            if(char == entry.character){
                return entry.value;
            }
        }
        for(const entry of hiragana){
            if(char == entry.character){
                return entry.value;
            }
        }
        for(const entry of katakana){
            if(char == entry.character){
                return entry.value;
            }
        }
        for(const entry of romanji){
            if(char == entry.character){
                return entry.value;
            }
        }

        return "00";
    }

    public stringFormatter(input: string): string {
        while(input.length < 16){
            input += "0";
        }
        let result = input.substring(0, 8) + " " + input.substring(8, 16) + "\n";
        result = this.geckoCodeWrapper(result);
        return result;
    }

    private geckoCodeWrapper(input: string): string {
        const result = `$Optional: Force Nametag for Local Player [Fizzi]
*When playing online, nametag "____" will show above your character. ---------------------
*Will not cause desyncs when playing online
C20355B4 00000008 #Force Nametag
3C608048 80639D30
5463443E 2C030208
40820028 806DB61C
88630000 7C03F800
40820018 38600000
3D808003 618C55CC
7D8903A6 4E800420
1C9F0E90 00000000
C22FD1EC 0000000E
48000010 4E800021
${input}3C608048 80639D30
5463443E 2C030208
40820020 806DB61C
88630000 7C03D800
40820010 4BFFFFD1
7C6802A6 4800002C
7F63DB78 3D808003
618C556C 7D8903A6
4E800421 5463063E
3D808023 618C754C
7D8903A6 4E800421
60000000 00000000`;
    
        return result;
    }

    // then break it into portions of 8 and 8 (fill with 00) and break. done as a seperate call


    // if longer than one line return an error saying it needs to be fewer chars (non english takes more space)

}
  