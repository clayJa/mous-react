function add(a: number, b: number) {
    return a + b
}
describe('我的第一个测试用例', () => {
    it('1 + 3 = 3', () => {
        expect(add(1,2)).toEqual(3);
    })
})
