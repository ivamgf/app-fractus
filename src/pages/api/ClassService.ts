// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { ApiService } from './ApiService';

export const TodoService = {
	list() {
		return ApiService.get(endpoint);
	}
}
function endpoint(endpoint: any) {
    throw new Error("Function not implemented.");
}

