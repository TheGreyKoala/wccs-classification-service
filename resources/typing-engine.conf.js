"use strict;"
module.exports = {
    "pageTypes": {
        "Service": {
            "name": "Service",
            "selector": { "type": "UrlPatternSelector", "value": "\\\/service\\\/?$" },
            "properties": {
            },
            "references": {
            }
        }
    },
    "contentTypes": {
    },
    "referenceTypes": {
    }
};

/*
"use strict";
const functions = [];
functions.push((document, createAnnotation) => createAnnotation(document, "#content h3", "PageHeading"));
functions.push((document, createAnnotation) => createAnnotation(document, "#content h3 + h4", "PageSubHeading"));
functions.push((document, createAnnotation) => createAnnotation(document, "#content h4 + div", "Introduction"));
functions.push((document, createAnnotation) => createAnnotation(document, "h4.panel-title", "FaqSectionTitle"));
functions.push((document, createAnnotation) => createAnnotation(document, "h6.hrf-title", "Question"));
functions.push((document, createAnnotation) => createAnnotation(document, "div.hrf-content", "Answer"));
functions.push((document, createAnnotation) => createAnnotation(document, "div.panel-group + p", "BottomText"));
functions.push((document, createAnnotation) => createAnnotation(document, "h4.entry-title a", "NewsDetailPage"));
exports.getFunctions = () => functions;
*/