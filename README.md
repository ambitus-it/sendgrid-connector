# Sendgrid Connector

We have make a library to use sendgrid emails with dynamic templates

## Cloning

git clone 

## Usage

```

First: Copy your APIKEY to file configs.
Second: Change your Template Id and Dynamic Params
Third: Send a Post with Headers (Content-type application/json)
Four: Send a json with this format:

{
	"to": "emailToSend",
	"from": "emailFrom",
	"subject": "Subject",
	"text": "Text",
	"templateId": "TemplateID",
	"params": {
		  foo: bar,
	}
}

```

## Thanks.
