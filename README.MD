# Sovcombank Test
A post offer employment test for the "Web Designer" position. Alpaca menu design.

See: https://homcenco.github.io/sovcombank-test/

## Installing and running
> Tested in macOS (Safari, Chrome)

To install type in terminal commands:
```bash
git clone https://github.com/homcenco/sovcombank-test.git
cd sovcombank-test
npm install
```

To run development watchers with browser sync:
```bash
npm run dev
```

To run production builder:
```bash
npm run prod
```

## Alpaca menu design
### Desktop
- Screen size `> 768px`.
- Horizontal menu.
- Links have hover effects (disabled on mobile).
- Links ending with triangle have dropdown menu.
- Link (dropdown) hover changes triangle direction to the opposite (on default directed down).
- Phone is clickable and dials that number.
- Design as shown in the image below.
- `NOTE!` Dropdown menu can be overflowed with items!

<img src="https://raw.githubusercontent.com/homcenco/sovcombank-test/main/files/design-desktop.png" alt="Desktop design">

### Ipad
- Screen size `<= 768px`.
- Menu hides in to burger.
- Menu click shows overlay on the right with slide-in-out effect.
- Link (dropdown) click changes triangle direction to the opposite (on default directed down).
- Design as shown in the image below.

<img src="https://raw.githubusercontent.com/homcenco/sovcombank-test/main/files/design-ipad.png" alt="Ipad design">

### Iphone
- Screen size `<= 375px`.
- Menu effects as in `Ipad` design.
- Design as shown in the image below.

<img src="https://raw.githubusercontent.com/homcenco/sovcombank-test/main/files/design-iphone.png" alt="Iphone design">

## Files
- [Task origin `docx`](https://raw.githubusercontent.com/homcenco/sovcombank-test/main/files/task_origin.docx)
- [Figma origin `link`](https://www.figma.com/file/a8Z21nanfYQ7JnYItyhcns/Untitled)
- [Figma design `fig`](https://raw.githubusercontent.com/homcenco/sovcombank-test/main/files/design_origin.fig)


## TO-DO
- [x] Adaptive design test
- [x] Responsive design test
- [x] Menu script add
- [x] Use only `HTML`/`CSS`/`BEM`/`GULP`
- [ ] HTML amp button nav ul
