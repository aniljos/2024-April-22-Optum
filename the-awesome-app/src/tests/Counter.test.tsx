import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../components/Counter';

test('renders the component', () => {

    render(<Counter initValue={5} title='Counter'/>);
    const counterText = screen.getByText('Counter');
    expect(counterText).toBeInTheDocument();
    const countText = screen.getByText('Count: 5');
    expect(countText).toBeInTheDocument();


})

test('increments the count', () => {

    render(<Counter initValue={5} title='Counter'/>);
    let countText = screen.getByText('Count: 5');
    expect(countText).toBeInTheDocument();

    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton, {});
    countText = screen.getByText('Count: 6');
    expect(countText).toBeInTheDocument();

});
