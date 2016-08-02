import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Row from '../../src/components/Row';

const renderer = TestUtils.createRenderer();

describe('Row', () => {
  it('Should add "row" class', () => {
    renderer.render(<Row />);
    expect(renderer.getRenderOutput().props.className).toEqual('row');
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    renderer.render(<Row reverse />);
    expect(renderer.getRenderOutput().props.className).toContain('reverse');
  });

  it('Should not replace class', () => {
    renderer.render(<Row className="foo" />);
    const { className } = renderer.getRenderOutput().props;
    expect(className).toContain('foo');
    expect(className).toContain('row');
  });

  it('Should add modificators', () => {
    renderer.render(
      <Row
        start="xs"
        center="sm"
        end="md"
        top="lg"
        middle="xs"
        bottom="sm"
        around="md"
        between="lg"
        first="xs"
        last="sm"
      />
    );
    const { className } = renderer.getRenderOutput().props;

    expect(className).toContain('row');
    expect(className).toContain('start-xs');
    expect(className).toContain('center-sm');
    expect(className).toContain('end-md');
    expect(className).toContain('top-lg');
    expect(className).toContain('middle-xs');
    expect(className).toContain('bottom-sm');
    expect(className).toContain('around-md');
    expect(className).toContain('between-lg');
    expect(className).toContain('first-xs');
    expect(className).toContain('last-sm');
  });

  it('Should support custom tag name', () => {
    renderer.render(<Row tagName="ul" />);
    expect(renderer.getRenderOutput().type).toBe('ul');
  });
});
