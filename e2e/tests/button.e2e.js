import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `ButtonComponent`// declare the fixture
    .page `http://localhost:6006/iframe.html?id=button--with-text`;  // specify the start page


//then create a test and place your code there
test('Page Loads', async t => {
    await t
        .expect(Selector('.bc-red-light').innerText).eql('Hello Button');
});
