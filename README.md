# react-simple-ellipsis

> A very simple component that allows you to add ellipsis to your texts when you do not want to display the entire text with the possibility of displaying the entire text

## Props

| prop     |   default   |             type |
| -------- | :---------: | ---------------: |
| id       | _required_  | string \| number |
| text     | _required_  |           string |
| mode     |             |           number |
| ellipsis |    "..."    |           string |
| label    | "Show more" |           string |
| limit    |     200     |           number |
| class    |   "more"    |           string |

## Install

```
yarn add react-simple-ellipsis
or
npm i react-simple-ellipsis
```

## Usage

`mode`

- `1` - truncate the text to the _**next word**_ when the limit is reached
- `2` - truncate the text _**before**_ the word after the limit is reached
- default: break the text when the limit has been reached

```jsx
import { Ellipsis } from "react-simple-ellipsis";

<Ellipsis
  ellipsis="..."
  label="Show more"
  id={comment.id}
  text={comment.text}
  limit={200}
  class="more"
  mode={2}
/>;
```
