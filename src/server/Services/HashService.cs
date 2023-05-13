using System.Security.Cryptography;
using System.Text;

namespace Services
{
    public static class HashService
    {
        public static string HashPin(int pin)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(pin.ToString()));
                StringBuilder result = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    result.Append(bytes[i].ToString("x2"));
                }

                return result.ToString();
            }
        }
    }
}
