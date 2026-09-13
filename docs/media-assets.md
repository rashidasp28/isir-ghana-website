# Media asset guidelines

Large images and videos slow repository operations, deployments, and page delivery. These rules keep new media manageable without changing existing published content.

## Required limits

The automated media check enforces these hard limits:

| Asset type | Maximum file size |
| --- | ---: |
| Images | 5 MiB |
| Videos | 20 MiB |

Aim below the limits. A typical website image should usually be well under 2 MiB after resizing and compression.

One existing image is recorded in `config/media-size-baseline.json`. It is a temporary legacy exception and may not grow. Do not add new exceptions.

## Before adding an image

1. Crop unnecessary areas.
2. Resize to the largest dimensions the page actually displays.
3. Preserve a high-quality original outside the website repository.
4. Export photographs as WebP, AVIF, or a suitably compressed JPEG.
5. Use PNG only when transparency, diagrams, or lossless detail require it.
6. Check that text embedded in an image remains readable on a phone.
7. Give the file a descriptive lowercase name.
8. Add useful alternative text where the image is rendered.

Do not commit personal, confidential, or location-sensitive metadata. Confirm that ISIR Ghana has permission to publish identifiable people, especially children.

## Before adding a video

1. Trim unused footage.
2. Use a web-compatible codec and resolution.
3. Remove unnecessary audio tracks.
4. Provide a poster image and meaningful surrounding text.
5. Consider an approved external host when a video cannot be kept below 20 MiB.
6. Confirm publication consent for every identifiable participant.

## Run the check

From the repository root:

```bash
npm run check:media
```

The command scans supported image and video formats under `public/`. It reports every oversized file and exits unsuccessfully when:

- a new asset exceeds its limit;
- the grandfathered asset becomes larger; or
- the legacy baseline contains an entry for a file that no longer exists.

Compress or resize a failing asset. Do not raise the limits or add a baseline entry merely to make the check pass.

## Replacing the legacy oversized image

When `public/images/field/brick-steam-2.png` is safely optimized:

1. verify its visual quality and page usage;
2. replace it with the optimized asset;
3. remove its entry from `config/media-size-baseline.json`;
4. run `npm run check:media`, `npm run lint`, and `npm run build`.
