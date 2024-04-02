import React from 'react';
import { AuthProvider } from './AuthProvider.js';
import Routes from '.././App.js';

export default function Providers() {
    return (
        <AuthProvider><Routes /></AuthProvider>
    );
}