let val5: void = undefined;
function val5_func(): void {
    console.log("This is my warning message");
}

export default function() {
	console.log('val5', val5);
	console.log('val5_func()', val5_func());
};