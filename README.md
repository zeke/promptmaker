# promptmaker

Generate random artistic text prompts for use with generative AI models

Data comes from the [CLIP Interrogator](https://github.com/pharmapsychotic/clip-interrogator)

## Installation

```sh
npm install promptmaker
```

## Usage

Call the function without arguments to get a random prompt:

```js
promptmaker();
// -> graffiti art of ocean waves mannerism by Georg Schrimpf, distant expression, eyes closed or not visible
```

Specify an optional medium, subject, artist, movement, or flavors:

```js
promptmaker({
  medium: "graffiti art",
  subject: "ocean waves",
});
// -> graffiti art of ocean waves mannerism by Georg Schrimpf, distant expression, eyes closed or not visible
```

## API

### `promptmaker([options])`

Options, all of which default to random if unspecified:

- `medium` String
- `subject` String
- `artist` String
- `movement` String
- `flavors` Array of Strings

Returns a string in the format:

```
{medium} of {subject} {movement} by {artist}, {flavors}
```

## CLI

```
npx promptmaker <optional-subject>
```

## Tests

```sh
npm install
npm test
```
