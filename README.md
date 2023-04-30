# promptmaker

Generate random artistic text prompts for use with generative AI models

Data comes from the [CLIP Interrogator](https://github.com/pharmapsychotic/clip-interrogator)

## Installation

```sh
npm install promptmaker
```

## Usage

```
// Get a random prompt
promptmaker()

// Get a random prompt about cats
promptmaker({subject: 'cats'})
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

## Tests

```sh
npm install
npm test
```
