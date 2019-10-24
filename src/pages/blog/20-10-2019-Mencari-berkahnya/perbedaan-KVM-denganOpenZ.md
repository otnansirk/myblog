---
date: 2017-07-12
path: '/perbedaan-kvm-dan-openz'
title: 'Perbedaan KVM dan OpenZ'
thumbnail: 'image.png'
tags: ['KVM', 'OpenZ']
label: 'Infra'
author: 'Admin'
---
Pernahkah kalian merasa bingung saat menentukan jenis VPS yang ingin digunakan, apakah memilih OpenVZ atay KVM? Namun apakah kalian mengetahui apa perbedaan VPS OpenVZ dengan KVM ? tiap VPS memiliki kekurangan dan kelebihanya masing – masing walaupun spesifikasinya sama.

OpenVZ dan KVM adalah jenis virtualisasi yang berbeda. Sebenarnya selain 2 virtualisasi tersebut ada juga jenis virtualisasi lainya seperti cloud. Pada artikel ini kita hanya akan membahas perbedaan VPS OpenVZ dengan KVM saja.

```javascript{numberLines: true}
import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import GenerateTitle from './CleanPath'

const menu = ({ frontmatter: payload}) => {
  return (
    <Link 
      to={ payload.frontmatter.path }
    >
      <div className="post-card">
        <div className="post-image">
        <Img
          fluid={payload.frontmatter.thumbnail.childImageSharp.fluid}
        />
        </div>
        <div className="post-container">
          <br/>
          <span className="post-title title">
              { GenerateTitle(payload.frontmatter.path) }
          </span>
          <br/>
          <small style={{color: `#757575`, fontSize:`14px`}}>
              <label>{payload.frontmatter.label}</label>&nbsp;
              {payload.frontmatter.date}
          </small>
          <br/>
          <br/>

          <p>
            { payload.excerpt.substring(0, 88) } ...
          </p>
        </div>
      </div>
    </Link>
  )
}


export const query = graphql`
  fragment IndexPostFragment on MarkdownRemark {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      label
      path
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`


export default menu
```