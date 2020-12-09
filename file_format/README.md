# Viscuit File Format

The Viscuit file format is JSON based. This is used to save and loaded Viscuits.

Currently I haven't the file format documented anyway.

Viscuit doesn't seem open source.

It's insightful into how Viscuit works by looking at the format.

## Rules
- Rules can contain 2 different types, rules or "vispict"
- It can be considered the views section. Graphics can be placed inside glasses or outside

## Typescript

## Reverse engineering

- All key values in the JSON file have been found through trial and error
- Making changes to a Viscuit and saving the file
- Inspecting the response sent off to the server

## Image format

- Still unknown
- It's base64 encoded
- It's compressed [probably using zlib](https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#compress())
- Encoded using https://github.com/timkurvers/as3-crypto/blob/master/src/com/hurlant/util/Base64.as#L37
- It may be PNG format, but not sure
