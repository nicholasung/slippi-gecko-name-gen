import { alphabet, hiragana, katakana, numbers, romanji, symbols } from "@/objects/nametagData";
export class stringProcessor {

    constructor(){}

    public toGecko(input: string): string {
        let result = ""
        for(const char of input){
            result += this.findChar(char);
        }
        return this.stringFormatter(input, result);
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

    private stringFormatter(original: string,input: string): string {
        while(input.length < 16){
            input += "0";
        }
        let result = input.substring(0, 8) + " " + input.substring(8, 14) + "00\n";
        result = this.geckoCodeWrapper(original, result);
        return result;
    }

    private geckoCodeWrapper(original: string, input: string): string {
        const result = `$Optional: Show Friendly Player Indicators [Fizzi, UnclePunch]
*When playing online, nametag "${original}" will show above your character. A heart will always be shown over your teammate. Helpful for colorblind players to keep track of the players.
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
60000000 00000000
C22FC9E4 0000001D #Online/Optional/ShowAllyIndicator/ShowAllyIndicator.asm
3B840000 7C0802A6
90010004 9421FF50
BE810008 7C7E1B78
3C608048 80639D30
5463443E 2C030208
408200A4 3D808016
618CB168 7D8903A6
4E800421 2C030000
4182008C 806DB61C
88630000 7C03F000
4182007C 3D808003
618C3370 7D8903A6
4E800421 7C7D1B78
7FC3F378 3D808003
618C3370 7D8903A6
4E800421 7C03E800
4082004C 1C7E000E
3C808046 6084B6A0
7CA32214 8865003C
60630010 9865003C
1C7D0004 7C63FA14
C0230064 BA810008
800100B4 382100B0
7C0803A6 3D80802F
618CCA84 7D8903A6
4E800420 7FC3F378
BA810008 800100B4
382100B0 7C0803A6
60000000 00000000`;
    
        return result;
    }
}
  