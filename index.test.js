const stringLength = require('./index');
const reverse = require('./reverse');
const Calculatore = require('./calculatore');
const capitalizing = require('./capitalize');

it('should retutn 6 characters from the string safari' , () => {
    expect(stringLength("safari")).toBe(6)
})

it('should throw an error when the string is less than 1 or longer than 10' , ()=>{
    expect(() => stringLength("safariHamulidaniel")).toThrow('Wrong value');
})

it('should reverse the string safari', () => {
    expect(reverse("safari")).toBe("irafas");
});

describe('should calculate values' , () => {
    it('add two numbers 5 and 6 and gives 10' , () =>{
        const calc = new Calculatore();
        expect(calc.add(4 , 6)).toBe(10);
    });
    it('divide two numbers 8 and 2 and gives 4' , () =>{
        const calc = new Calculatore();
        expect(calc.divide(8 , 2)).toBe(4);
    });
    it('substruct two numbers 6 and 5 and gives 1' , () =>{
        const calc = new Calculatore();
        expect(calc.substract(6 , 5)).toBe(1);
    });
})

it('capitilize the string' , () => {
    expect(capitalizing("daniel")).toBe("Daniel");
})