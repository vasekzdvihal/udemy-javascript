### Cascade

1. Origin and Importance
2. Specificity
3. Order of Appearance

#### Order of Appearance ###
```css
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
```
Both of the following divs will have a blue background color because the `.blue` class is defined after the `.red` class. The `.blue`

```html
<div class="red blue"></div>
<div class="blue red"></div>
```
Same rule is applied in following
```css
.element {
  background-color: red;
  background-color: blue;
}
```

These are all based on **author declarations.**

1. Linked style sheets
2. Embedded styles (the `<style>` attribute)
3. Inline styles

**These are things we write.** It could be from our stylesheets, JavaScript adding and inline style, or even using an `@import`. 
Whatever the situation, we have control over these things. 

And really, these all fall under **order of appearance.**

#### Origin and Importance ####
So we have:
1. Author declarations (what we control)
2. User agent declarations (the browser defaults)
3. User declarations (user stylesheets - styles that user imposes)

The order if origin is: 
1. Author declarations
2. User declarations
3. User agent declarations

When `!important` comes to play
1. **Important user declarations**
2. **Important author declarations**
3. Author declarations
4. User declarations
5. User agent declarations

When **animations & transitions** come to play (according to the spec)
1. **Transitions**
2. Important user declarations
3. Important author declarations
4. **Animations**
5. Author declarations
6. User declarations
7. User agent declarations

But in the real world, it's more like:
1. Important user declarations
2. Important author declarations
3. **Animations**
4. **Transitions**
5. Author declarations
6. User declarations
7. User agent declarations

#### Specificity ####
https://specificity.keegan.st/

Specificity is one of the ways that the browser decides which declaration to use on a given element (if there are 2 or more conflicting styles).

```css
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.red.blue {
  background: purple;
}
```

```html
<div class="red blue"></div>
```
**Keep specificity flat!** The problem with raising specificity is, if you need to overwrite that in the future, it can be frustrating.
So by keeping specificity flat, we eliminate one of the things the browser uses to decide which rule to apply. 

1. Origin and Importance
2. ~~Specificity~~
3. Order of Appearance

In flat specificity, we don't need `!important` because we're not trying to override anything.

KP: This flat rule is like training wheels. It's a good way to start, but as you get more comfortable, you can start to use more advanced techniques.

