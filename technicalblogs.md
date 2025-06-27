---
layout: page
title: Technical Blog
permalink: /technicalblogs/
---

## Latest Technical Insights & Tutorials

Welcome to my technical blog! Here you'll find articles, tutorials, and insights on Customer Experience (CX) transformation, SAP technologies, and the application of Artificial Intelligence in enterprise solutions.

<div class="main-post-list">
  <ol class="post-list">
    {% for post in site.posts %}
      <li>
        <h2 class="post-list__post-title post-title">
          <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
        </h2>
        <p class="excerpt">{{ post.excerpt | strip_html | truncate: 200 }}&hellip;</p>
        <div class="post-list__meta">
          <time datetime="{{ post.date | date_to_xmlschema }}" class="post-list__meta--date date">{{ post.date | date: "%-d %b %Y" }}</time>
          {% if post.tags.size > 0 %}
          &#8226; <span class="post-meta__tags">on {% for tag in post.tags %}<a href="{{ site.baseurl }}/tags/#{{ tag }}">{{ tag }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}</span>
          {% endif %}
        </div>
        <hr class="post-list__divider">
      </li>
    {% endfor %}
  </ol>

  <hr class="post-list__divider ">

  {% if paginator.previous_page or paginator.next_page %}
    {% include pagination.html %}
  {% endif %}
</div>