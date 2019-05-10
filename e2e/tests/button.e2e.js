import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `ButtonComponent`// declare the fixture
    .page `http://localhost:6006/?path=/story/button--with-text`;  // specify the start page


//then create a test and place your code there
test('Page Loads', async t => {
    await t.switchToIframe('#storybook-preview-iframe');
    await t
        .expect(Selector('.red').innerText).eql('Hello Button');
});
