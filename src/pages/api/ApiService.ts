// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const url = '';

export const ApiService = {
    async get(endpoint: any) {
        const response = await fetch(`${url}${endpoint}`);
        return await response.json();
    }
}
