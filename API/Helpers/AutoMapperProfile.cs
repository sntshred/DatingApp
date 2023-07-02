using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helper
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AppUser,MemberDto>()
            .ForMember(dest => dest.PhotoUrl,
                opt => opt.MapFrom(sourceMember => sourceMember.Photos.FirstOrDefault(x => x.IsMain).Url))
            .ForMember(dest => dest.Age,opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotoDto>();
        }
    }
}