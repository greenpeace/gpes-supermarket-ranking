# gpes-supermarket-ranking

**The purpose of this repo is to help developing and testing html interactives, infographics and graphics that are responsive and work in many different sites.**

Altrough I've build it for the Spanish office as a tool that complements our own **[Visualization Guide](https://greenpeace.github.io/gpes-visualisations/)**, I've added templates from many other sites.

It includes, as an example, a responsive vectorial infographic. Developers should replace it by their own work.

**A word of advice:** html interactives, infographics and graphics are content that you add to your own site. Content, not functionality.

## Develop an html interactive

Getting ready to develop an html interactive is easy and fast. We keep your workflow simple.

### Install Jekyll to build the tests

Jekyll is a static html emulator that also uses Twig templating. In this repo we use it to insert your html in many site templates. [Install Jekyll](https://jekyllrb.com/).

### Develop html interactives and test them in many sites

To develop an html interactive, please modify the html, css and js files in the `_includes` folder and use `Jekyll` to insert them in the demo templates. Now you have an aproximate preview how it will look like in each platform. 

Use `jekyll build` and `jekyll serve` to generate the files.

```
jekyll build
jekyll serve
```

### Do you need a plugin?

To publish in production we normally upload this type of projects to the media library and include them in our site using our own **[Wordpress plugin](https://github.com/greenpeace/gpes-import-wp-shortcodes)**. It's just one way of doing it ;-)

## Add your page templates

You can add more templates / site pages to this repo:

1. Clone the repo
2. Add your template inside the `_layouts` folder, using `gpes-blog.html` as an example
3. Add the following code to the place in the template where people will put the interactive

```
<style>
{% include styles.css %}
</style>
{% include html.html %}
<script>
{% include script.js %}
</script>
```

4. Duplicate the file `gpes-blog.html` **in the root of this repo's folder**. Rename and modify to work with your template.
5. Build and test. Make sure all the CSS, JS And images load from your localserver.

For more information look at the examples already in the repo.
