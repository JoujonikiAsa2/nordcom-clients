export const registerUser = async (data: any) => {
  try {
    const response = await fetch("https://nordcom-backend-server.vercel.app/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || "Registration failed");
    }

    return resData; 
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
};
