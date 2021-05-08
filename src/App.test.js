import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16.1";
import imageDetections from './imageDetections.json'
import { unwrap } from '@material-ui/core/test-utils'

configure({ adapter: new Adapter() });
const UnwrappedComponent = unwrap(App);

test('renders Image Repo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Image Repo/i);
  expect(linkElement).toBeInTheDocument();
});

describe("tests functions", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<UnwrappedComponent classes={{}} />);
  });

  describe("handleTextFieldChange changes textFieldValue", () => {
    it("should call setState on textFieldValue", () => {
      const mockEvent = {
        target: {
          value: "zebra"
        }
      };
      
      var imageDataKeys = Object.keys(imageDetections)
      const expected = {
        imageData: imageDataKeys,
        keywords: [],
        textFieldValue: 'zebra',
        imageLoading: false,
        imageInputURL: null,
        imageInput: null
      }
      
      wrapper.instance().handleTextFieldChange(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("addOnClick changes keywords", () => {
    it("should call setState on keywords", () => {
      var imageDataKeys = Object.keys(imageDetections)
      const appInstance = wrapper.instance()
      const expected = {
        imageData: imageDataKeys,
        keywords: ['zebra', 'apple'],
        textFieldValue: 'apple',
        imageLoading: false,
        imageInputURL: null,
        imageInput: null
      }
      var mockEvent = {
        target: {
          value: "zebra"
        }
      };

      appInstance.handleTextFieldChange(mockEvent);
      appInstance.addOnClick();
      mockEvent = {
        target: {
          value: "apple"
        }
      };
      appInstance.handleTextFieldChange(mockEvent);
      appInstance.addOnClick();
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("resetOnClick resets states", () => {
    it("should reset keywords and imageData", () => {
      var imageDataKeys = Object.keys(imageDetections)
      const appInstance = wrapper.instance()
      const expected = {
        imageData: imageDataKeys,
        keywords: [],
        textFieldValue: 'zebra',
        imageLoading: false,
        imageInputURL: null,
        imageInput: null
      }
      var mockEvent = {
        target: {
          value: "zebra"
        }
      };

      appInstance.handleTextFieldChange(mockEvent);
      appInstance.addOnClick();
      appInstance.searchOnClick()
      appInstance.resetOnClick();
      expect(wrapper.state()).toEqual(expected);
    });
  });
});

