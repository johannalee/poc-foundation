import { Selector } from 'testcafe';

fixture `ButtonComponent`
    .page `http://localhost:6006/iframe.html?id=button--with-text`;


// then create a test and place your code there
test('Colour changes on click', async t => {
    const redBtn = await Selector('.bc-red-light')
    await t
        .expect(redBtn.innerText).eql('Hello Button');

    const redBtnStyle = await redBtn.style;
    const redBtnBgColour = await redBtnStyle['background-color'];
    await t.expect(redBtnBgColour).eql('rgb(212, 106, 106)');

    await t.click(redBtn)
    const greenBtn = await Selector('.bc-green-light')
    const greenBtnStyle = await greenBtn.style;
    const greenBtnBgColour = await greenBtnStyle['background-color'];

    await t.expect(greenBtnBgColour).eql('rgb(165, 198, 99)');
});
