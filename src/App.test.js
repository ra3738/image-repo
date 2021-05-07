import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16.1";
import imageDetections from './imageDetections.json'

configure({ adapter: new Adapter() });

test('renders Image Repo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Image Repo/i);
  expect(linkElement).toBeInTheDocument();
});

describe("App", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe("handleTextFieldChange", () => {
    it("should call setState on textFieldValue", () => {
      const mockEvent = {
        target: {
          name: "textFieldValue",
          value: "zebra"
        }
      };
      
      var imageDataKeys = Object.keys(imageDetections)
      const expected = {
        imageData: imageDataKeys,
        keywords: [],
        textFieldValue: 'zebra',
        imageInputURL: null,
        imageInput: null
      }
      
      wrapper.instance().handleTextFieldChange(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });
});