# react-simple-ellipsis

> A very simple component that allows you to add ellipsis to your texts when you do not want to display the entire text with the possibility of displaying the entire text

## Props

| prop     |   default   |             type |
| -------- | :---------: | ---------------: |
| ellipsis |    "..."    |           string |
| label    | "Show more" |           string |
| id       |  undefined  | string \| number |
| text     |  undefined  |           string |
| limit    |     200     |           number |
| class    |   "more"    |           string |

## Install

```
yarn add react-simple-ellipsis
or
npm i react-simple-ellipsis
```

## Usage

```jsx
import { Ellipsis } from "react-simple-ellipsis";

<Ellipsis
  ellipsis="..."
  label="Show more"
  id={comment.id}
  text={comment.text}
  limit={200}
  class="more"
/>;
```
