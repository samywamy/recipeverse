﻿var React = require('react');

class LayoutContainer extends React.Component {
  render() {
  	return (
         <html>
      		<head>
    		    <link rel="stylesheet" type="text/css" href="/style.css"/>

      			<title>HELLO</title>
      		</head>
      		<body>
                {this.props.children}
                <script src="script.js"></script>
      		</body>
      	</html> 
    );
  }
}

module.exports = LayoutContainer;