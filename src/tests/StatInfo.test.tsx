import { render, waitFor, screen } from '@testing-library/react'
import StatInfo from 'components/StatInfo'
import renderer from 'react-test-renderer'

it('StatInfo component renders correctly', () => {
  const tree = renderer.create(<StatInfo label="Total clicks" value="12" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('StatInfo component renders data as expected', async () => {
  render(<StatInfo label="Total clicks" value="12" />)

  const label = await waitFor(() => screen.findByTestId('label'))
  expect(label).toBeInTheDocument()
  expect(label.innerHTML).toEqual('Total clicks')

  const value = await waitFor(() => screen.findByTestId('value'))
  expect(value).toBeInTheDocument()
  expect(value.innerHTML).toEqual('12')
})
