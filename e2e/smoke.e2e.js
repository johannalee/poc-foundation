import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Smoke Test`// declare the fixture
    .page `http://localhost:6006`;  // specify the start page


//then create a test and place your code there
test('Page Loads', async t => {
    await t
        .expect(Selector('body').innerText).contains('Canvas');
});
