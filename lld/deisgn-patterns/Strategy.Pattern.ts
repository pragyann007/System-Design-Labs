interface ICodeGeneratorStrategy{
    codeGenerator():string
}

class OpenAICodeGenerator implements ICodeGeneratorStrategy {

    codeGenerator(){
        return "Code generated with openai"
    }

}
class GeminiCodeGenerator implements ICodeGeneratorStrategy {

    codeGenerator(){
        return "Code generated with gemini"
    }

}
class ClaudeCodeGenerator implements ICodeGeneratorStrategy {

    codeGenerator(){
        return "Code generated with claude"
    }

}

class CodeGenerator{
    constructor(private strategy?:ICodeGeneratorStrategy){}
    setStrartegy(codeGenerateStrategy:ICodeGeneratorStrategy){
        if(this.strategy == null){
                    this.strategy = codeGenerateStrategy ; 

            
        }
    }

    generate(){
        if(this.strategy==null) throw new Error("Must pass startegy")
       return  this.strategy.codeGenerator();

    }

}


const codeGen:CodeGenerator = new CodeGenerator(new ClaudeCodeGenerator());
let response = codeGen.generate()
console.log(response)
