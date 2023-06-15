namespace API.Errors
{
    /// <summary>
    /// And this is going to contain the response of what are we going to send back to the client when we have an exception.
    /// </summary>
    public class ApiException
    {
        public ApiException(int statusCode, string messages, string details)
        {
            StatusCode = statusCode;
            Messages = messages;
            Details = details;
        }

        public int StatusCode { get; set; }
        public string Messages { get; set; }
        public string Details { get; set; }
    }
}