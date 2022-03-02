import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const eventApi = createApi({
	reducerPath: "eventApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://politician.tk/" }),
	endpoints: (builder) => ({
		getAllEvent: builder.query({
			query: (id) => ({
				url: `politician/${id}`,
			// 	const { data } = await axios.get(
			// 	`http://politician.tk/politician/${userId}/`
			// );
				method: "GET",
			}),
		}),
		createEvent: builder.mutation({
			query: (newPost) => {
				console.log("Create Post: ", newPost);
				return {
					url: `event/`,
					method: "POST",
					body: newPost,
					headers: {
						"Content-type": "application/json",
					},
				};
			},
		}),

		updateEvent: builder.mutation({
			query: (updatePostData) => {
				console.log("Update Post: ", updatePostData);
				const { id, ...data } = updatePostData;
				console.log("Actual Update Post: ", data);
				return {
					url: `event/${id}/`,
					method: "PUT",
					body: data,
					headers: {
						"Content-type": "application/json",
					},
				};
			},
		}),

		deleteEvent: builder.mutation({
			query: (id) => {
				console.log("Delete ID:", id);
				return {
					url: `event/${id}/`,
					method: "DELETE",
				};
			},
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetAllEventQuery,
	useCreateEventMutation,
	useUpdateEventMutation,
	useDeleteEventMutation,
} = eventApi;
