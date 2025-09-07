/**
 * @jest-environment jsdom
 */
// Here we test that the IsoFlow component handles errors in a recoverable way
// This means that when using <IsoFlow> in an app, if an error happens, the app
// should be able to catch the error and recover from it
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Isoflow } from '../Isoflow';

describe('Error Boundary', () => {

    test('providing minimal props works', async () => {
        render(<Isoflow mainMenuOptions={[]} initialData={{ title: 'MyTitle', items: [], views: [], icons: [], colors: [] }} />);
        // Find element with the title "MyTitle"
        expect(screen.getByText('MyTitle')).toBeInTheDocument();
        // await screen.getByText('MyTitle');
    });
});