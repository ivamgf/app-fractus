import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Head from '../lib/components/nav/headerInit'

describe('App Fractus', () => {
    it('should return head', () => {
        render(<Head />);
        const title = screen.getByText('Fractus');
        expect(title).toBeInTheDocument();
    });
  });
