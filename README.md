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
- `artist` String.
- `movement` String. Set to `false` to exclude it.
- `flavors` Array of Strings. Se

Returns a string in the format:

```
{medium} of {subject} {movement} by {artist}, {flavors}
```

To exclude any of the above options from the generated prompt string, set them to `false`.

### `promptmaker.artists`

An array of artist names, like "Constance Copeman", "Amos Sewell", and "Amelia Robertson Hill"

### `promptmaker.mediums`

An array of artistic mediums, like "a flemish Baroque", "a jigsaw puzzle", and "an oil on canvas painting"

### `promptmaker.movements`

An array of movements, like "abstract expressionism", "art deco", and "baroque"

### `promptmaker.flavors`

An array of flavors, like "highly detailed", "cinematic lighting", and "eyes open, looking at viewer"

## CLI

```
npx promptmaker <optional-subject>
```

## Tests

```sh
npm install
npm test
```
