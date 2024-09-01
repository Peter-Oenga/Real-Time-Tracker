import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Here you can log the error to an error reporting service if needed
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1>Oops! Something went wrong.</h1>
          <p>The application encountered an error.</p>
          <button onClick={this.handleReload}>Reload Application</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
