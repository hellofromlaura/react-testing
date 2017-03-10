import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Gallery component', function() {
	it('Renders the correct class name and number of images', function() {
		const imagesArray = [
		{
		url: "http://www.example1.com/image.png",
        description: "Example 1 description"
		},
		{
		url: "http://www.example2.com/image.png",
        description: "Example 2 description"
		},
		{
		url: "http://www.example3.com/image.png",
        description: "Example 3 description"
		}
		];

		const renderer = TestUtils.createRenderer();
		renderer.render(<Gallery  images={imagesArray} />)

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('gallery');

		

		const imageResults = result.props.children;
		imageResults.should.have.length(3);

		const imageResult = result.props.children[0];
		imageResult.props.url.should.equal("http://www.example1.com/image.png");
		imageResult.props.description.should.equal("Example 1 description");

	})
})

