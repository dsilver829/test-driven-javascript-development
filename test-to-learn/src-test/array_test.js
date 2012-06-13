TestCase("ArrayTest", {
	"test array splice should not modify array": function () {
		var arr = [1, 2, 3, 4, 5];
		var result = arr.splice(2, 3);
		
		assertEquals([3,4,5], result);
	}
});
