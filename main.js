import input from 'input';


async function main() {
    const shopping = [];
    let finished = false;

    while(!finished) {
        const resp = await input.text('Enter an item ( or "finish") ')
        console.info(shopping);
    } if (resp == 'finish') {
        finished = true;
    } else {
        shopping.push(resp);
    }
    console.log("Here is your shopping list.");
    console.log(shopping);
}

main();